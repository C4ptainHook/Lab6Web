const Collapse = {
    objectCounter: 0,

    addCollapseObject: function(event) {
        event.preventDefault();
        let targetBlock = event.target.closest('#div3, #div4, #div5');
        if (targetBlock) {
            let formHTML = `
                <form class="collapse-form">
                    <button  class="collapse-button" onclick="Collapse.collapse(event,${this.objectCounter})">Collapse</button>
                    <div class="collapse-input-section" id="collapse-section${this.objectCounter}">
                    <textarea rows="2"></textarea>
                    <button class="svg-button" onclick="sendObject(event)">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" id="save"><path fill="none" d="M0 0h24v24H0V0z">
                    </path><path d="M19 13v5c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-5c0-.55-.45-1-1-1s-1 
                    .45-1 1v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 
                    .45-1 1zm-6-.33l1.88-1.88c.39-.39 1.02-.39 1.41 0 
                    .39.39.39 1.02 0 1.41l-3.59 3.59c-.39.39-1.02.39-1.41 0L7.7 
                    12.2c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L11 12.67V4c0-.55.45-1 1-1s1 
                    .45 1 1v8.67z"></path></svg>
                    </button>
                    </div>
                </form>`;

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
        const textarea = document.getElementById(`collapse-section${collapseIndex}`);
        if (textarea) {
          if (textarea.style.display === 'none') {
            textarea.style.display = 'flex';
          } else {
            textarea.style.display = 'none';
          }
        }
    }
};

async function sendObject(event) {
    event.preventDefault();
    const forms = document.querySelectorAll(".collapse-form");
    const objectName = "Saved.txt";

    forms.forEach(form => {
        const textareas = form.querySelectorAll("textarea");
        textareas.forEach(textarea => {
            const value = textarea.value;
            const label = document.createElement("label");
            label.textContent = value;
            textarea.replaceWith(label);
        });

    });

    const saveforms = document.querySelectorAll(".collapse-form"); 

    let formsContent = "";
    saveforms.forEach(element => {
        formsContent += element.innerHTML;
    });

    let formData = new FormData();
    formData.append("content", formsContent);
    formData.append("contentname", objectName);

    const response = await fetch("writefile.php", {
    method: "POST",
    body: formData,
    });

    console.log(response);
  }
  
