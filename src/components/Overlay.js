export default class Overlay {
    constructor() {
      this.overlayElement = document.getElementById("overlay");
      this.listItems = document.querySelectorAll(".link-list a");
  
      for (let i = 0; i < this.listItems.length; i++) {
        this.listItems[i].addEventListener("click", (e) => {
          e.preventDefault();
          this.showOverlay();
        });
      }
  
      this.overlayElement.addEventListener("click", () => {
        this.hideOverlay();
      });
    }
  
    showOverlay() {
      this.overlayElement.style.display = "block";
      setTimeout(() => {
        this.overlayElement.style.opacity = "1";
      }, 10);
    }
  
    hideOverlay() {
      this.overlayElement.style.opacity = "0";
      setTimeout(() => {
        this.overlayElement.style.display = "none";
      }, 300);
    }
  }