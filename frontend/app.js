import "./styles/style.css";
import PostSerive from "./services/PostService";
document.getElementById("post-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const paragraph = document.getElementById("paragraph").value;
  const subtitle = document.getElementById("subtitle").value;
  const type = document.getElementById("type").value;
  const image = document.getElementById("image").files;
  let paragraphTexts = [];
  for (let i = 0; i < 3; i++) {
    paragraphTexts[i] = document.getElementById(
      "paragraphtext" + (i + 1)
    ).value;
  }
  //   for (let i = 0; i < array.length; i++) {
  //     console.log(array[i]); //Aquí puedes procesar cada valor del array
  //   }
  let subtitleTexts = [];
  for (let i = 0; i < 3; i++) {
    subtitleTexts[i] = document.getElementById("subtitletexts" + (i + 1)).value;
  }
  console.log(
    title,
    paragraph,
    paragraphTexts,
    subtitle,
    subtitleTexts,
    type,
    image
  );
  const formData = new FormData();
  formData.append("image", image[0]);
  formData.append("title", title);
  formData.append("paragraph", paragraph);
  formData.append("subtitle", subtitle);
  formData.append("type", type);
  const postService = new PostSerive();
  postService.createPost(formData);
});
