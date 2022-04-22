const menuBtn=document.querySelector('.hamburger');
const ul=document.querySelector('ul');
 let menuOpen=false;

menuBtn.addEventListener('click', () =>
{
	if (!menuOpen)
	{
		menuBtn.classList.add('open');
		ul.classList.add('active');
		menuOpen=true;
		
		 const uten = ul.innerHTML = ` 
		 <li><a href="#">shop</a></li>
		 <li><a href="#">our story</a></li>
		 <li><a href="#">expertise</a></li>
		 <li><a href="#">contact</a></li>
		 `;

		
	}
	else
	{
		menuBtn.classList.remove('open');
		ul.classList.remove('active');
		menuOpen=false;

	}
});

