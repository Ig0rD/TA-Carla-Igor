const bmain = document.querySelector('button.main');
const curso = document.querySelector('select.main');
const divc = document.querySelector('div.cursos');
const list = document.querySelector('ol.cursos');
const con = [];
const badd = document.querySelector('button#add');
const inpadd = document.querySelector('input.main');
const vetcursos = ['Administração', 'Direito', 'Medicina', 'Química', 'Engenharia Civil', 'Ciências Sociais', 'Arquitetura, Psicologia', 'Engenharia da Computação', 'Matemática'];
bmain.addEventListener('click', function(z) {
    z.preventDefault();
    if ((con.includes(curso.value)===false)&&(con.length < 3)) {
        const row = `<li><span>${curso.value}</span >
        <button>Remover</button>
        <button>Mover para cima</button>
        <button>Mover para baixo</button></li>`;
        list.innerHTML += row;
        con.push(curso.value);
    }
});
divc.addEventListener('click', function(e) {
    if (e.target.textContent==='Remover') {
        e.target.parentElement.remove();
        const a = con.indexOf(e.target.parentElement.childNodes[0].textContent);
        con.splice(a);
    }
});
badd.addEventListener('click', function(y) {
    y.preventDefault();
    if ((vetcursos.includes(inpadd.value)=== false)&&(inpadd.value !== '')) {
        const opt = `<option value=${inpadd.value}>${inpadd.value}</option>`;
        curso.innerHTML += opt;
        vetcursos.push(inpadd.value);
    }
});
