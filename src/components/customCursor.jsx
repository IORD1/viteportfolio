// src/components/CustomCursor.js
import React, { useEffect } from 'react';
import './customCursor.css';


const CustomCursor = () => {
  useEffect(() => {
    // Your cursor-related JavaScript code here
    const cursor = {
      delay: 8,
      _x: 0,
      _y: 0,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      cursorVisible: true,
      cursorEnlarged: false,
      $dot: document.querySelector('.cursor-dot'),
      $outline: document.querySelector('.cursor-dot-outline'),

      init: function () {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;

        this.setupEventListeners();
        this.animateDotOutline();
      },

      setupEventListeners: function () {
        // ... (Copy the event listener setup code)
        var self = this;
        
        // Anchor hovering
        document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        
        // Click events
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
        // here
        document.addEventListener('mousemove', (e) => {
          // Show the cursor
          this.cursorVisible = true;
          this.toggleCursorVisibility();

          // Position the dot
          this.endX = e.pageX;
          this.endY = e.pageY;
          this.$dot.style.top = this.endY + 'px';
          this.$dot.style.left = this.endX + 'px';
        });

        // ... (Copy the rest of the event listener code)
         // Hide/show cursor
         document.addEventListener('mouseenter', function(e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
      });
      
      document.addEventListener('mouseleave', function(e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
      });
      },

      // ... (Copy the rest of the cursor methods)
      animateDotOutline: function() {
        var self = this;
        
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        
        requestAnimationFrame(this.animateDotOutline.bind(self));
    },
    
    toggleCursorSize: function() {
        var self = this;
        
        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },
    
    toggleCursorVisibility: function() {
        var self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
    };

    cursor.init();

    // Clean up the event listeners when the component unmounts
    return () => {
      document.removeEventListener('mousemove', cursor.setupEventListeners);
      // ... (Remove other event listeners as needed)
    };
  }, []); // The empty dependency array ensures that useEffect runs only once

  return (
    <div>
      {/* Add your HTML structure for the cursor elements if not already present */}
      <div className="cursor-dot"></div>
      <div className="cursor-dot-outline"></div>
    </div>
  );
};

export default CustomCursor;
