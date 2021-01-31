function create(words) {
   const content = document.getElementById('content');
   for (let i = 0; i< words.length; i++){
      const div = document.createElement('div');
      const paragraph = document.createElement('p');
      paragraph.textContent = words[i];
      paragraph.style.display = 'none';
      div.appendChild(paragraph);
      content.appendChild(div);
   }
   content.addEventListener('click', function(ev){
      if(ev.target.tagName==='DIV' || ev.target.tagName==='P'){
         const p = ev.target.children[0] || ev.target;
         const isVisible = p.style.display === 'block';
         p.style.display = isVisible ? 'none': 'block';

      }
     
   })

}