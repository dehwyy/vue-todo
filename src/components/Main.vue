<template>
	<div>
		<RouterLink to="/posts"><p class="link-p">goto posts</p></RouterLink>
	</div>
</template>
<script>
export default {
	
}
</script>
<style>
  a {
    text-decoration: none;
  }

	.link-p {
    color: black;
    text-align: center;
    font-size: 2em;
    padding: 20px 0 0 0;
    transition: 0.2s ease;
  }
  .link-p:hover {
    color: rgb(40, 40, 40);
    transform: scale(1.1);
  }
</style>