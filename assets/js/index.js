class Wrap {
  
  // constructor function
    constructor(els) {
      this.els = els;
      this.store;
    }

  // Insert content, specified by the parameter, to the end of each element in the set of matched elements.
    append(newHTML) {
      this.els.forEach(el => {
        let newEle = document.createElement(newHTML);
        el.appendChild(newEle);
      });
      return this;
    }

  // Adds the specified class(es) to each element in the set of matched elements.  

    addClass(className) {
      this.els.forEach(el => {
        el.classList.add(className)
      })
      return this;
    }


  // Removes the specified class(es) to each element in the set of matched elements.  

    removeClass(className) {
      this.els.forEach(el => {
        el.classList.remove(className)
      })
      return this;
    }

  // Determine whether any of the matched elements are assigned the given class.  
    hasClass(className) {
      this.els.forEach(el => {
        if (el.classList.contains(className)) {
          console.log(true);
        } else {
          console.log(false);
        };
      })
      return this;
    }

  // Sets the value of an attribute  in the set of matched elements. 
    attr(key, value) {
      this.els.forEach(el => {
        el.setAttribute(key, value);
      })
      return this;
    }

  // Removes the value of an attribute  in the set of matched elements.   
    removeAttr(key, value) {
      this.els.forEach(el => {
        el.removeAttribute(key, value);
      })
      return this;
    }

  // Sets the  CSS properties for every matched element.
    css(attribute, value) {
      this.els.forEach(element => {
        element.style[attribute] = value;
      })
      return this;
    }

  // Sets the  CSS properties of first matched element. 
    first(attribute, value) {
      this.els[0].style[attribute] = value;
      return this;
    }

  // Get the value of a property for the first element in the set of matched elements 
    prop(attribute) {
      (this.els[0].getAttribute(attribute));
      return this;
    }

  // Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.  
    html(innerText) {
      this.els.forEach(el => {
        if (!innerText) {
          console.log(el.innerHTML);
        } else {
          el.innerHTML = innerText;
        }
      })
      return this;
    }

  //Get the descendants of each element in the current set of matched elements.

    find(tag){
      this.els.forEach((el, i) => {
        for (const x of el.children) {
          if (x == el.children[i]) {console.log(x)}
          else if(x != el.children[i]) {console.log(false)};
        }
      });
      return this;
    }
        
  // Load data from the server
    async load(url) {
      let fetchData = await fetch(url).then(d => d.json()).then(v => this.store = v);
      console.log(this.store);
    }

  // Load data from the server using a HTTP POST request.
    post(url, data) {
      let requestData = fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json()).then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
    }

  // Load JSON-encoded data from the server using a GET HTTP request.
    getJSON(url, data) {
      let getData = fetch(url, {
        method: 'GET',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json()).then(response => {
        if (response) {
          let res = JSON.stringify(response);
          console.log(res);
        } else {
          throw new Error('Network response was not ok!!');
        }
      })
    }


  // before() method inserts a node before the reference node as a child of a specified parent node.
    before(node) {
      this.els.forEach(el => {
        let html = document.createElement(node);
        el.parentNode.insertBefore(html, el);
      })
      return this;
    }

   // Get the children of each element in the set of matched elements, optionally filtered by a selector.
    children(className){
      this.els.forEach(el => {
        className = el
        console.log(el) 
      })
      return this;
    }

    contents(){
      this.els.forEach(el => {
        console.log(el) 
      })
      return this;
    }

  // after() method inserts a node after the reference node as a child of a specified parent node.
    after(node) {
      this.els.forEach(el => {
        let html = document.createElement(node);
        el.parentNode.insertBefore(html, el.nextSibling);
      })
      return this;
    }

  // Get the current value of the first element in the set of matched elements.
    val(newVal){
      this.els.forEach(el => {
        el.value = newVal;
      });
      return this;
    }

    // One or more class names (separated by spaces) to be toggled for each element in the matched set.
    toggleclass(className, status){
      this.els.forEach(el => {
        if (el.classList) {el.classList.add(className);}   
        else {el.className += ' ' + className;}
      })
      return this;
    }

  //  Bind an event handler to the "click" JavaScript event, or trigger that event on an element.
    click(callback) {
      this.els.forEach(el => {
        el.addEventListener('click',callback);
      });
      return this;
    }

  // Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
    dblclick(callback) {
      this.els.forEach(el => {
        el.addEventListener('dblclick',callback);
      });
      return this;
    }

  // Bind one or two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.
    hover(callback1, callback2) {
      this.els.forEach(el => {
        el.onmouseover = callback1;
        el.onmouseout = callback2;
      });
      return this;
    }

  //Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.
    mousedown(callback) {
      this.els.forEach(el => {
        el.addEventListener('mousedown',callback);
      });
      return this;
    }

  // Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
    mouseenter(callback) {
      this.els.forEach(el => {
        el.addEventListener('mouseenter',callback);
      });
      return this;
    }

  // Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
    mouseleave(callback) {
      this.els.forEach(el => {
        el.addEventListener('mouseleave',callback);
      });
      return this;
    }

  // Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
    mousemove(callback) {
      this.els.forEach(el => {
        el.addEventListener('mousemove',callback);
      });
      return this;
    }

  // Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.
    mouseout(callback) {
      this.els.forEach(el => {
        el.addEventListener('mouseout',callback);
      });
      return this;
    }

  // Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
    dblclick(callback) {
      this.els.forEach(el => {
        el.addEventListener('dblclick',callback);
      });
      return this;
    }

  // Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.
    mouseover(callback) {
      this.els.forEach(el => {
        el.addEventListener('mouseover',callback);
      });
      return this;
    }

  // Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.
    mouseup(callback) {
      this.els.forEach(el => {
        el.addEventListener('mouseup',callback);
      });
      return this;
    }

  // Bind an event handler to the "contextmenu" JavaScript event, or trigger that event on an element.
    contextmenu(callback) {
      this.els.forEach(el => {
        el.addEventListener('mouseup',callback);
      });
      return this;
    }

  // Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.
    keydown(callback) {
      this.els.forEach(el => {
        el.addEventListener('keydown',callback);
      });
      return this;
    }

  // Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.
    keypress(callback) {
      this.els.forEach(el => {
        el.addEventListener('keypress',callback);
      });
      return this;
    }

  // Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.
    keyup(callback) {
      this.els.forEach(el => {
        el.addEventListener('keyup',callback);
      });
      return this;
    }

    //end class wrap
}



let $ = (v) => new Wrap(document.querySelectorAll(v))