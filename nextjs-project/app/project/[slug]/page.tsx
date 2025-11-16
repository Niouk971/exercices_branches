export default async function Project({ params }) {

    const { slug } = await params;

    return (
        <div>
            slug : {slug}
        </div>
    );
}