import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.select`
		border:none;
		border-radius: 5px;
		background: #4ebf80;
		font-size: 14px;
`
class FlavorForm extends React.Component {
		constructor(props: any) {
				super(props);
				this.state = {value: 'basketball'};
				this.handleChange = this.handleChange.bind(this);
		}

		handleChange(event: any) {
				this.setState({value: event.target.value});
		}

		render() {

				return (
					<div>
							<Wrapper
								// @ts-ignore
								value={this.state.value}
								onChange={this.handleChange}>
									>
									<option value="周">周</option>
									<option value="月">月</option>
									<option value="年">年</option>
							</Wrapper>
					</div>

				);
		}
}

export {FlavorForm};

