import React, {Component, Fragment} from 'react'
import {iconShare, iconClose} from 'images'
import {Svg} from 'components'

import Share from './Share'
import ShareWindow from './ShareWindow'
import Content from './Content'
import Close from './Close'

class ShareUser extends Component {
  state = {
    shareUserOpen: false
  }

  handleOpenShareWindow = () => {
    this.setState(prev => {
      return {shareUserOpen: !prev.shareUserOpen}
    })
  }

  render() {
    const url = window.location.href

    return (
      <Fragment>
        <Share onClick={this.handleOpenShareWindow}>
          <Svg icon={iconShare} fill="#FFA640" />
        </Share>
        <ShareWindow visible={this.state.shareUserOpen}>
          <Content>
            <Close onClick={this.handleOpenShareWindow}>
              <Svg icon={iconClose} />
            </Close>
            {url}
          </Content>
        </ShareWindow>
      </Fragment>
    )
  }
}

export default ShareUser
