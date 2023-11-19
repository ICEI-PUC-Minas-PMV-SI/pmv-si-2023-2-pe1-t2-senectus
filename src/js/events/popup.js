class Popup {
  #emitter = mitt();

  setAlert({
	  name, 
	  eventName, 
	  callback = () => {}, 
	  time = 1500
  }) {
	this.#emitter.on(eventName, () => {
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
	  }, time);
	});
  }

  dispatch(eventName) {
	  this.#emitter.emit(eventName);
  }
}

const popup = new Popup();
export { popup };
