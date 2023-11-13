class Popup {
  #emitter = mitt();

  setAlert(name, eventName, callback = () => {}) {
	this.emitter.on(eventName, () => {
	  const pin = document.getElementById('popup-pin');
	  pin.innerHTML = `
		<div id="wrapper">
		  <div id="popup">
			<p>${name}</p>
			<i class="fa-solid fa-check"></i>
		  </div>
		</div>
	  ` + pin.innerHTML;
	  
	  setTimeout(() => {
		  const popup = document.getElementById('wrapper');
		  popup.remove();
		  callback();
	  }, 1500);
	});
  }

  get emitter() {
	return this.#emitter;
  }
}

const popup = new Popup();
export { popup };
