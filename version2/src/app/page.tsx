export default async function Home() {
  // const filePath = path.join(process.cwd(), "data.json");

  const info = fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );

  const data = await info;

  return (
    <div>
      <h1>Static Site Generation (SSG) Example</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <div className="flex [&>*]:m-1 ">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
