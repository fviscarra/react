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
const brother = [
		{ name: 'alejandro',
			avatar: 'https://www.hola.com/imagenes/estar-bien/20190215137141/razas-perro-pequenos-gt/0-645-998/perros-miniatura-m.jpg'
	},
	{
		name: 'ramiro',
		avatar: 'https://www.hola.com/imagenes/estar-bien/20190215137141/razas-perro-pequenos-gt/0-645-998/perros-miniatura-m.jpg'
	},
	{
		name: 'paolo',
		avatar: 'https://www.hola.com/imagenes/estar-bien/20190215137141/razas-perro-pequenos-gt/0-645-998/perros-miniatura-m.jpg'
	},
	{
		name: 'hugo',
		avatar: 'https://www.hola.com/imagenes/estar-bien/20190215137141/razas-perro-pequenos-gt/0-645-998/perros-miniatura-m.jpg'
	},
	{
		name: 'matias',
		avatar: 'https://www.hola.com/imagenes/estar-bien/20190215137141/razas-perro-pequenos-gt/0-645-998/perros-miniatura-m.jpg'
	},
	{
		name: 'luis',
		avatar: 'https://www.hola.com/imagenes/estar-bien/20190215137141/razas-perro-pequenos-gt/0-645-998/perros-miniatura-m.jpg'
	}
]
const Avatar= props => <img src={props.user.avatar} alt={props.user.name} />;
const Name= props => <p>{props.user.name}</p>;

const User = props => {
	return (
	<div>
		<Avatar user={props.user} />;
		<Name user={props.user} />
	</div>
	)
};

const Usuarios = props => {
	const usuariosLista= props.list.map((user,i ) => <User user={user} key={i} /> );
	return (
		<div>
			{usuariosLista}
		</div>
	)
}

ReactDOM.render(<Usuarios list={brother} />, document.getElementById('app'));