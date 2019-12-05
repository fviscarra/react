'use strict';

//const el = React.createElement('h1', {id:'title'}, 'hola compañeros');
//ReactDOM.render(el,document.getElementById('app'));

//const el = <h1 id= "title">hola <span>mundo</span></h1>

//function Saludar(props){
//  return <h1>hola {props.name}</h1>
//}
//ReactDOM.render(
//<div>
//<Saludar name="fernando" />
//<Saludar name="hugo" />
//<Saludar name="ramiro" />
//<Saludar name="luis" />
//<Saludar name="paolo" />
//<Saludar name="alejandro" />
//</div>,
//document.getElementById('app')
//)
var brother = [{ name: 'alejandro',
	avatar: 'https://www.hola.com/imagenes/estar-bien/20190215137141/razas-perro-pequenos-gt/0-645-998/perros-miniatura-m.jpg'
}, {
	name: 'ramiro',
	avatar: 'https://www.hola.com/imagenes/estar-bien/20190215137141/razas-perro-pequenos-gt/0-645-998/perros-miniatura-m.jpg'
}, {
	name: 'paolo',
	avatar: 'https://www.hola.com/imagenes/estar-bien/20190215137141/razas-perro-pequenos-gt/0-645-998/perros-miniatura-m.jpg'
}, {
	name: 'hugo',
	avatar: 'https://www.hola.com/imagenes/estar-bien/20190215137141/razas-perro-pequenos-gt/0-645-998/perros-miniatura-m.jpg'
}, {
	name: 'matias',
	avatar: 'https://www.hola.com/imagenes/estar-bien/20190215137141/razas-perro-pequenos-gt/0-645-998/perros-miniatura-m.jpg'
}, {
	name: 'luis',
	avatar: 'https://www.hola.com/imagenes/estar-bien/20190215137141/razas-perro-pequenos-gt/0-645-998/perros-miniatura-m.jpg'
}];
var Avatar = function Avatar(props) {
	return React.createElement('img', { src: props.user.avatar, alt: props.user.name });
};
var Name = function Name(props) {
	return React.createElement(
		'p',
		null,
		props.user.name
	);
};

var User = function User(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(Avatar, { user: props.user }),
		';',
		React.createElement(Name, { user: props.user })
	);
};

var Usuarios = function Usuarios(props) {
	var usuariosLista = props.list.map(function (user, i) {
		return React.createElement(User, { user: user, key: i });
	});
	return React.createElement(
		'div',
		null,
		usuariosLista
	);
};

ReactDOM.render(React.createElement(Usuarios, { list: brother }), document.getElementById('app'));