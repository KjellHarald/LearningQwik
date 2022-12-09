import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <Link href="/" style={{display: "inline-block", padding: "15px 10px"}}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/learning/" style={{display: "inline-block", padding: "15px 10px"}}>
            Learning Qwik
          </Link>
        </li>
      </ul>
    </header>
  );
});
