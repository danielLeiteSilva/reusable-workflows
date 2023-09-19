console.log("About to clear")
const caches = await github.rest.actions.getActionsCacheList({
  owner: context.repo.owner,
  repo: context.repo.repo,
})
for (const cache of caches.data.actions_caches) {
  console.log(cache)
  github.rest.actions.deleteActionsCacheById({
    owner: context.repo.owner,
    repo: context.repo.repo,
    cache_id: cache.id,
  })
}
console.log("Clear completed")