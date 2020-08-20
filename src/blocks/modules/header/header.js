// const modal = document.querySelector('.modal'),
// 		closesPopup = document.querySelectorAll('.modal__close');



// function openModal(activeModal) {
// 	modal.classList.add('active')
// 	activeModal.style.display = 'block'
// }


// const modalsTrigger = document.querySelectorAll('.modal-trigger')


// modalsTrigger.forEach(modalTriger => {
// 	modalTriger.addEventListener('click', function(e){
// 		if (e.target) {
// 			e.preventDefault()
// 		}
// 		let activeBtn = this.getAttribute('modal-target')
		
// 		let activeModal = document.querySelector(activeBtn)

// 		openModal(activeModal)
		

// 		return activeModal
// 	})
// })

// closesPopup.forEach(closePopup => {
// 	closePopup.addEventListener('click', function(e){
// 		modal.classList.remove('active')
// 		this.parentElement.style.display = 'none'

// 	})
// })
document.addEventListener('DOMContentLoaded', function() {
	const modalButtons = document.querySelectorAll('.modal-trigger'),
	modalWrapper = document.querySelector('.modal'),
	closeButtons = document.querySelectorAll('.modal__close'),
	overlay = document.querySelector('.modal__overlay');

	modalButtons.forEach(function(item){
		item.addEventListener('click', function(e) {
			if(e.target) {
				e.preventDefault();
			}
			let modalId = this.getAttribute('modal-trigger'),
				 modalElem = document.querySelector('.modal__body[modal-trigger="' + modalId + '"]');
			modalElem.classList.add('active');
			modalWrapper.classList.add('active');
		});
	}); // end foreach

	closeButtons.forEach(function(item){

	   item.addEventListener('click', function(e) {
	      let parentModal = this.closest('.modal__body');

	      parentModal.classList.remove('active');
	      modalWrapper.classList.remove('active');
	   });

	}); // end foreach

	overlay.addEventListener('click', function() {
	    document.querySelector('.modal__body.active').classList.remove('active');
	    modalWrapper.classList.remove('active');
	}); //End Listener

});

