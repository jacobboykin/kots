import * as React from "react";
import Modal from "react-modal";



class ConfigureGraphsModal extends React.Component {
  render() {
    const {
      showConfigureGraphs,
      toggleConfigureGraphs,
      updatePromValue,
      promValue,
      savingPromValue,
      onPromValueChange
    } = this.props;
    
    return (
      <Modal
          isOpen={showConfigureGraphs}
          onRequestClose={toggleConfigureGraphs}
          shouldReturnFocusAfterClose={false}
          contentLabel="Configure prometheus value"
          ariaHideApp={false}
          className="Modal"
        >
          <div className="Modal-body flex-column flex1">
            <h2 className="u-fontSize--largest u-fontWeight--bold u-color--tuna u-marginBottom--10">Configure graphs</h2>
            <p className="u-fontSize--normal u-color--dustyGray u-lineHeight--normal u-marginBottom--20">You can set the prometheus value to see the metrics</p>
            <h3 className="u-fontSize--normal u-fontWeight--bold u-color--tuna u-marginBottom--10">Prometheus value</h3>
            <form className="EditWatchForm flex-column" onSubmit={updatePromValue}>
              <input
                type="text"
                className="Input u-marginBottom--20"
                placeholder="Type the prometheus value here"
                value={promValue}
                onChange={onPromValueChange}
              />
              <div className="flex justifyContent--flexEnd u-marginTop--20">
                <button
                  type="button"
                  onClick={toggleConfigureGraphs}
                  className="btn secondary force-gray u-marginRight--20">
                  Cancel
              </button>
                <button
                  type="submit"
                  disabled={savingPromValue}
                  className="btn primary lightBlue">
                  {
                    savingPromValue
                      ? "Saving"
                      : "Save"
                  }
                </button>
              </div>
            </form>
          </div>
        </Modal>
    );
  }
}

export default ConfigureGraphsModal;