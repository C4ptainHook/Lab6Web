const Collapse = {
    objectCounter: 0,

    addCollapseObject: function(event) {
        event.preventDefault();
        let targetBlock = event.target.closest('#div3, #div4, #div5');
        if (targetBlock) {
            let formHTML = `
                <form class="collapse-form">
                    <button id="collapse-trigger${this.objectCounter}" onclick="Collapse.collapse(event,${this.objectCounter})">Collapse</button>
                    <textarea id="collapse-input${this.objectCounter}" rows="2"></textarea>
                </form>
            `;
            targetBlock.insertAdjacentHTML('beforeend', formHTML);
            this.objectCounter++;
        }
    },

    registerEvents: function() {
            document.body.addEventListener("dblclick", (event) => {
                event.preventDefault();
                this.addCollapseObject(event);
            });
    },

    collapse: function(event, collapseIndex) {
        event.preventDefault();
        const textarea = document.getElementById(`collapse-input${collapseIndex}`);
        if (textarea) {
          if (textarea.style.display === 'none') {
            textarea.style.display = 'block';
          } else {
            textarea.style.display = 'none';
          }
        }
    }
};

