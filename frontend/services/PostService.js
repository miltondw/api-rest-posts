class PostService {
  constructor() {
    this.URI = "http://localhost:3000/api/posts";
  }

  async getPost() {
    const res = await fetch(this.URI);
    const posts = await res.json();
    return posts;
  }
  async getOnePost(postId) {
    const res = await fetch(`${this.URI}/${postId}`);
    const data = await res.json();
    return data;
  }
  async updatePost(postId, post) {
    const res = await fetch(`${this.URI}/${postId}`, {
      method: "PUT",
      body: post,
    });
    const data = await res.json();
    return data;
  }
  async createPost(post) {
    const res = await fetch(this.URI, {
      method: "POST",
      body: post,
    });
    const data = await res.json();
    return data;
  }
  async deletePost(postId) {
    const res = await fetch(`${this.URI}/${postId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
  }
}
export default PostService;
