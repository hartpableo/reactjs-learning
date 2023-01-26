import React from 'react'
import Fb from '../images/fb.svg'
import Ig from '../images/ig.svg'
import Linkedin from '../images/linkedin.svg'
import Twitter from '../images/twitter.svg'
import Github from '../images/github.svg'

export default function Footer() {
    return (
        <footer role='contentinfo'>
            <div className="container">
                <h2 className="sr-only">Social Links:</h2>
                <ul id='social-links'>
                    <li><a href="#"><img src={ Twitter } alt="twitter icon"  target='_blank' /></a></li>
                    <li><a href="#"><img src={ Fb } alt="facebook icon"  target='_blank' /></a></li>
                    <li><a href="#"><img src={ Ig } alt="instagram icon"  target='_blank' /></a></li>
                    <li><a href="#"><img src={ Linkedin } alt="linkedin icon"  target='_blank' /></a></li>
                    <li><a href="#"><img src={ Github } alt="github icon"  target='_blank' /></a></li>
                </ul>
            </div>
        </footer>
    )
}