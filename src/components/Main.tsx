import { ARTICLES } from './constants';

const Main = () => (
	<main>
		{ARTICLES.map((article, index) => (
			<article key={index}>
				<h3>
					<a href={article.url} rel="noopener noreferrer" target="_blank">
						<span>{article.title}</span>
					</a>
				</h3>

				<blockquote>
					<p>{article.description}</p>

					<footer>
						<cite>{article.author}</cite>
						<time>{article.time}</time>
					</footer>
				</blockquote>
			</article>
		))}
	</main>
);

export default Main;
