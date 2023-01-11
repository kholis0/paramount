import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, useForm } from "@inertiajs/inertia-react";
import InputLabel from '@/Components/InputLabel';
import TextInput from "@/Components/TextInput";
import ValidationErrors from "@/Components/ValidationErrors";
import PrimaryButton from "@/Components/PrimaryButton";
import Checkbox from '@/Components/Checkbox';

export default function Create({ auth }) {
    const { setData, post, processing, errors} = useForm({
        name: '',
        category: '',
        video_url: '',
        thumbnail: '',
        rating: '',
        is_featured: false,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === "file" ? event.target.files[0] : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Insert a New Movie</h1>
            <hr className="mb-4" />
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                <InputLabel forInput="name" value="Name" />
                <TextInput
                    type="text"
                    name="name"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the name of the movies"
                    isError={errors.name}
                />
                <InputLabel forInput="category" value="Category" className="mt-4" />
                <TextInput
                    type="text"
                    name="category"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the category of the movies"
                    isError={errors.category}
                />
                <InputLabel forInput="video_url" value="Video URL" className="mt-4" />
                <TextInput
                    type="url"
                    name="video_url"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the video url of the movies"
                    isError={errors.video_url}
                />
                <InputLabel forInput="thumbnail" value="Thumbnail" className="mt-4" />
                <TextInput
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Insert thumbnail of the movies"
                    isError={errors.thumbnail}
                />
                <InputLabel forInput="rating" value="Rating" className="mt-4" />
                <TextInput
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the rating of the movies"
                    isError={errors.rating}
                />
                <div className="flex flex-row mt-4 items-center">
                    <InputLabel forInput="is_featured" value="Is Featured" className="mr-3 mt-1"/>
                    <Checkbox
                    name="is_featured"
                    handleChange={(e) => setData("is_featured", e.target.checked)}
                    />
                </div>
                <PrimaryButton type="submit" className="mt-4" processing={processing}>Save</PrimaryButton>
            </form>
        </Authenticated>
    );
}
