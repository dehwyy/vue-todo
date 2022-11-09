<template>
	<div :class="['posts']">
		<transition-group name="post-animation">
			<div class="posts__item" v-for="(post, index) in posts" :key="post.id">
				<div class="posts__item-content">
					<span style="display: inline-block; box-shadow: 0 2px black; margin-bottom: 5px;" >
						<b>Название: </b>{{post.title}}
					</span> <p>id: {{post.id}}</p> <!-- it looks like a garbage-->
				<div /> <!-- <= equals \n  -->
					<b>Описание: </b>{{post.body}}
				</div>
				<div>
					<button 
							@click="removePost(post.id)"
							class="btn btn-delete">delete post</button>
				</div>
				
			</div>
		</transition-group>
	</div>
</template>
<script>
export default {
	props: {
		posts: {
			type: Array,
			required: true
		},
	},
	data() {
		return {
			isMounted: false
		}
	},
  methods: {
		removePost(id) {
			this.$emit("removePost", id)
		}
	},
}
</script>
<style >
	.posts {
		width: 100%;
		display: flex;
		flex-direction: column;
  }
	.posts__item {
		margin: 30px 0 0 0;
		padding: 10px 25px;
		border: 2px solid gray;
		border-radius: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.posts__item-content {
		max-width: 80%;
	}
	.btn-delete {
		font-size: 20px;
		background-color: #6f42c1!important; 
		color: white!important;
	}
	.btn-delete:hover {
		background-color: #5f39a6!important;
	}

	.post-animation-enter-active,
	.post-animation-leave-active {
		transition: all 0.4s ease;
	}
	.post-animation-enter-from {
		opacity: 0;
		transform: translateX(1030px);
	}
	.post-animation-leave-to {
		opacity: 0;
		transform: translateX(-1030px);
	}
	.post-animation-move {
		transition: transform 0.8s ease;
	}
</style>