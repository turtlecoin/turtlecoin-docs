/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language='') {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    const repoUrl = `https://github.com/turtlecoin/turtlecoin-docs`
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('Getting-Started')}>
              Getting Started
            </a>
            <a href={this.docUrl('guides/Using-trtlbot-plus-plus.html')}>
              Guides
            </a>
            <a href={this.docUrl('developer/Resources.html')}>
              Developer Resources
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="http://chat.turtlecoin.lol/">Discord Chat</a>
            <a href="https://reddit.com/r/trtl/">Reddit</a>
            <a
              href="https://twitter.com/_turtlecoin"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://blog.turtlecoin.lol/">Blog</a>
            <a href="https://github.com/turtlecoin">GitHub</a>
            <a
              className="github-button"
              href="https://github.com/turtlecoin/turtlecoin-docs"
              data-icon="octicon-star"
              data-count-href={`${repoUrl}/stargazers`}
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <div>
          <section className="copyright">{this.props.config.copyright1}</section>
          <section className="copyright">{this.props.config.copyright2} <a href="https://opensource.org/licenses/MIT">MIT License</a></section>
          <section className="copyright">{this.props.config.copyright3} <a href="https://www.gnu.org/licenses/gpl-3.0.html">GNU General Public V3 License</a></section>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
