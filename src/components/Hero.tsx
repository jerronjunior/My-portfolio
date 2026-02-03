import { useEffect, useState, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Three.js 3D Binary Code Background
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new (window as any).THREE.Scene();
    const camera = new (window as any).THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    
    const renderer = new (window as any).THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Lighting for binary code with blue tones
    const ambientLight = new (window as any).THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    
    const pointLight1 = new (window as any).THREE.PointLight(0x0ea5e9, 0.8);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);
    
    const pointLight2 = new (window as any).THREE.PointLight(0x2563eb, 0.6);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Create binary code columns
    const binaryColumns: any[] = [];
    const columnCount = 30;
    
    // Create canvas texture for binary digits
    const createBinaryTexture = (digit: string, color: string) => {
      const size = 128;
      const textCanvas = document.createElement('canvas');
      textCanvas.width = size;
      textCanvas.height = size;
      const ctx = textCanvas.getContext('2d');
      
      if (ctx) {
        ctx.fillStyle = 'transparent';
        ctx.fillRect(0, 0, size, size);
        
        ctx.font = 'bold 80px monospace';
        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(digit, size / 2, size / 2);
      }
      
      const texture = new (window as any).THREE.CanvasTexture(textCanvas);
      return texture;
    };

    // Create multiple binary columns
    for (let col = 0; col < columnCount; col++) {
      const column: any[] = [];
      const digitsInColumn = Math.floor(Math.random() * 15) + 10;
      const xPos = (col - columnCount / 2) * 2;
      const zPos = Math.random() * 30 - 15;
      
      for (let i = 0; i < digitsInColumn; i++) {
        const digit = Math.random() > 0.5 ? '1' : '0';
        const isLeading = i === digitsInColumn - 1;
        
        // Create sprite for binary digit with blue colors
        const texture = createBinaryTexture(
          digit, 
          isLeading ? '#0ea5e9' : '#1e3a5f'
        );
        
        const spriteMaterial = new (window as any).THREE.SpriteMaterial({
          map: texture,
          transparent: true,
          opacity: isLeading ? 1 : 0.3 + Math.random() * 0.4,
        });
        
        const sprite = new (window as any).THREE.Sprite(spriteMaterial);
        sprite.position.set(xPos, 15 - i * 2, zPos);
        sprite.scale.set(1.5, 1.5, 1);
        
        sprite.userData = {
          originalY: sprite.position.y,
          speed: 0.05 + Math.random() * 0.1,
          digit: digit,
          isLeading: isLeading,
          opacity: spriteMaterial.opacity,
        };
        
        scene.add(sprite);
        column.push(sprite);
      }
      
      binaryColumns.push({
        sprites: column,
        resetTimer: Math.random() * 100,
        xPos: xPos,
        zPos: zPos,
      });
    }

    // Add floating binary particles with blue colors
    const particleCount = 100;
    const particleGeometry = new (window as any).THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 50;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      
      // Blue color for particles
      particleColors[i * 3] = 0.1 + Math.random() * 0.3;
      particleColors[i * 3 + 1] = 0.5 + Math.random() * 0.3;
      particleColors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
    }
    
    particleGeometry.setAttribute('position', new (window as any).THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new (window as any).THREE.BufferAttribute(particleColors, 3));
    
    const particleMaterial = new (window as any).THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
    });
    
    const particles = new (window as any).THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = 20;
    camera.position.y = 0;

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Animate binary columns falling
      binaryColumns.forEach((column) => {
        column.sprites.forEach((sprite: any) => {
          sprite.position.y -= sprite.userData.speed;
          
          // Reset when reaching bottom
          if (sprite.position.y < -20) {
            sprite.position.y = 20;
            
            // Randomly change digit
            if (Math.random() > 0.7) {
              const newDigit = Math.random() > 0.5 ? '1' : '0';
              const newTexture = createBinaryTexture(
                newDigit,
                sprite.userData.isLeading ? '#0ea5e9' : '#1e3a5f'
              );
              sprite.material.map = newTexture;
              sprite.userData.digit = newDigit;
            }
          }
          
          // Pulse effect for leading digits
          if (sprite.userData.isLeading) {
            sprite.material.opacity = 0.8 + Math.sin(time * 3) * 0.2;
          }
        });
      });

      // Rotate particles slowly
      particles.rotation.y += 0.0005;
      
      // Animate particles
      const positions = particleGeometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] -= 0.01;
        if (positions[i * 3 + 1] < -25) {
          positions[i * 3 + 1] = 25;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Camera follows mouse slightly
      camera.position.x += (mouseX * 3 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 3 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      
      <div className="hero-overlay"></div>
      
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for opportunities
        </div>
        
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Velu Spencer Jerrom</span>
        </h1>
        
        <h2 className="hero-subtitle">
          <span className="typing-effect">Software Engineer & Designer</span>
        </h2>
        
        <p className="hero-description">
          I craft beautiful digital experiences with clean code and creative design.
          Passionate about building solutions that make a difference.
        </p>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">30+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
        </div>
        
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToContact}>
            <span>Get In Touch</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <a href="#projects" className="btn btn-secondary">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 3V17M10 17L15 12M10 17L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>View My Work</span>
          </a>
        </div>
      </div>
    </section>
  );
}