import React from 'react';
import Dialog from 'react-toolbox/lib/dialog';
import VerifyMessage from './verifyMessage';
import './dialogs.less';

class Dialogs extends React.Component {

  constructor() {
    super();
    this.state = {
      active: true,
    };
    this.actions = [];
  }

  handleToggle() {
    this.setState(Object.assign({}, this.state, { active: !this.state.active }));
  }

  render() {
    return (
      <div className='dialogs'>
        <Dialog
          actions={this.actions}
          active={!!this.props.active}
        >
          <div className='dialogs'>
            {(() => {
              switch (this.props.active) {
                case 'verify-message':
                  return <VerifyMessage />;
                default :
                  return null;
              }
            })()}
          </div>
        </Dialog>
      </div>
    );
  }
}

Dialogs.propTypes = {
  active: React.PropTypes.string,
};

export default Dialogs;
