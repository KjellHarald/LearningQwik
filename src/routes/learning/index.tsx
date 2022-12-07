import { JSX } from "@builder.io/qwik/jsx-runtime";

const LearningQwik = (): JSX.Element => {
  return (
    <div className="learningqwik">
      <h2>Learning Qwik</h2>
      <p>
        Qwik is an <b>Edge</b> Framework for JavaScript!
      </p>

      <h3>Small Todo</h3>
      <ol>
        <li>Create new Page | Complete</li>
        <li>
          Update the Navigation in header to include link to "Learning Qwik" |
          Complete
        </li>
        <li>Add Home link in header navigation. | Complete</li>
        <li>Remove other header navigation options. | Complete</li>
        <li>Create Components</li>
        <li>Use Components on this page.</li>
      </ol>

      <h3>src/routes</h3>
      <p>
        Qwik have a straight forward directory mapping to create "routes" or sub
        pages. These are simply their own directory under src/routes/, e.g:
        src/routes/new.
      </p>
    </div>
  );
};
export default LearningQwik;
