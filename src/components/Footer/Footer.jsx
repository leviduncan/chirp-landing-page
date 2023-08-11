import React from 'react'
import Logo from '../Logo/Logo'
import TwitterBlk from '../../assets/twit-blk.svg'

function Footer() {
  return (
    <div className="footer">
        <div className="container d-sm-flex justify-content-between">
                <Logo fontsize="20px">Chirp.</Logo>
            <div class="d-flex">
                <div><img src={TwitterBlk} alt="" /></div>
                <div className="px-4">
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <p>Terms of Use</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer