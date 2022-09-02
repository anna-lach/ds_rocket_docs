import { html } from 'lit';
import { baseHead } from '../parts/baseHead.js';

export class LayoutBlogPost {
  render(data) {
    const { title, description, publishDate, author, authorHref, heroImage, permalink, alt, lang } =
      data;
    return html`
      <html-server-only lang=${lang || 'en'}>
        <head>
          ${baseHead({ title, description, permalink })}
        </head>

        <body>
          <!--<blog-header></blog-header>-->
          <!--<web-menu name="site">
              <nav aria-label="site">
                  <a href="/about/">About</a>
                  <a href="/blog/" aria-current="page">Blog 2</a>
              </nav>
          </web-menu>-->
          <div class="wrapper">
            <blog-post
              title=${title}
              author=${author}
              .authorHref=${authorHref}
              hero-image=${heroImage}
              publish-date=${publishDate}
              alt=${alt}
            >
              ${data.content()}
            </blog-post>
          </div>
          <!--<site-footer></site-footer>-->
        </body>
      </html-server-only>
    `;
  }
}
