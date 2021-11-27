import React from 'react'
import { Link } from 'react-router-dom'
import Socials from '../socials/socials'
export default function Footer() {
    return (
        <div className="footer_con">
            <div className="footer_con2" >
                <div className="footer1">
                    <div className="footer_bold">Languages</div>
                    <div className="footer_subtext">Ruby</div>
                </div>
                <div className="footer1">
                    <div className="footer_bold">Style</div>
                    <div className="footer_subtext">HTML</div>
                    <div className="footer_subtext">CSS</div>
                </div>
                <div className="footer1">
                    <div className="footer_bold">Technology</div>
                    <div className="footer_subtext">Rails</div>
                    <div className="footer_subtext">React</div>
                    <div className="footer_subtext">Redux</div>
                    <div className="footer_subtext">Node.js</div>
                    <div className="footer_subtext">Express</div>
                </div>
                <div className="footer1">
                    <div className="footer_bold">Database</div>
                    <div className="footer_subtext">PostSQL</div>
                    <div className="footer_subtext">MongoDB</div>
                    <Socials/>
                </div>                                
               
            </div>

        </div>
    )
}
