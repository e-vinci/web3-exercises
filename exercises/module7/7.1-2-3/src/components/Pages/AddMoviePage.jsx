import { useOutletContext } from "react-router-dom";
import AddMovieForm from "components/AddMovieForm/AddMovieForm";
import PageTitle from "components/PageTitle/PageTitle";

const AddMoviePage = () => {
  const { onMovieAdded } = useOutletContext();
  return (
    <>
      <PageTitle title="Add a movie" />
      <AddMovieForm onMovieAdded={onMovieAdded} />
    </>
  );
};

export default AddMoviePage;
