const core = require('@actions/core')

// most @actions toolkit packages have async methods
async function action () {
  core.setFailed('🚨 Failed because this action always fails.\n\nIf you want it to stop failing, remove this action.')
}

action()
