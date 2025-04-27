<script lang="ts">
  let peopleMenuOpen = false;
  let classesMenuOpen = false;
</script>

<header
  class="flex items-center justify-between bg-black text-white p-4 rounded-xl max-w-screen-lg mx-auto mt-2"
>
  <h1>School Manager</h1>
  <nav>
    <ul class="flex items-center gap-4">
      <li>
        <a href="/">Home</a>
      </li>
      <li class="relative">
        <button
          on:mouseenter={() => (peopleMenuOpen = true)}
          on:mouseleave={() => (peopleMenuOpen = false)}
        >
          People
        </button>
        {#if peopleMenuOpen}
          <div
            class="absolute left-0 mt-2 w-56 rounded-md
            shadow-lg bg-black ring-1 ring-black ring-opacity-5
            focus:outline-none p-4 flex flex-col gap-2"
          >
            <a href="/people/teachers">Teachers</a>
            <a href="/people/students">Students</a>
          </div>
        {/if}
      </li>
      <li>
        <a href="/homerooms">Homeroom</a>
      </li>
    </ul>
  </nav>
</header>
