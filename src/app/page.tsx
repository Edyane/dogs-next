import photosGet from '@/actions/photos-get';
import Feed from '@/components/feed/feed';

export default async function Home() {
	const data = await photosGet();

	return (
		<section className="container mainContainer">
			<h1 className="title">Dogs</h1>
			<Feed photos={data} />
		</section>
	);
}
