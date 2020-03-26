import React from 'react';
import Form, {Field} from './components/Form';
import InputField from './components/InputField';
class App extends React.Component{
	render(){
		return(
			<div>
				<Form >
					<Field
						component = {InputField}
						name = 'demoInput'
					/>
				</Form>
			</div>
		);
	}
}


export default App;
