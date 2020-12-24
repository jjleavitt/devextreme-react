import * as React from 'react';
import Example from './example-block';

import { Button } from '../packages/devextreme-react/src/button';
import { TextBox } from '../packages/devextreme-react/src/text-box';
import { ValidationGroup } from '../packages/devextreme-react/src/validation-group';
import { ValidationSummary } from '../packages/devextreme-react/src/validation-summary';
import { EmailRule, RequiredRule, Validator } from '../packages/devextreme-react/src/validator';

const validate = (params: any): void => {
  const result = params.validationGroup.validate();
  if (result.isValid) {
    // form data is valid
    params.validationGroup.reset();
  }
};

export default class extends React.Component<any, any> {
  public render(): React.ReactNode {
    return (
      <Example title="Validation" state={this.state}>
        <ValidationGroup>
          <TextBox defaultValue="email@mail.com">
            <Validator>
              <EmailRule message="Email is invalid." />
              <RequiredRule message="Email is required." />
            </Validator>
          </TextBox>
          <br />
          <TextBox defaultValue="password">
            <Validator>
              <RequiredRule message="Password is required." />
            </Validator>
          </TextBox>
          <ValidationSummary />
          <br />
          <Button
            text="Submit"
            onClick={validate}
          />
        </ValidationGroup>
      </Example>
    );
  }
}
