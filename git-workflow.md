# Workflow with upstream

Here’s a typical workflow using upstream:

1. Fetch Updates from upstream:

```sh

git fetch upstream
```

**This retrieves the latest changes from the original repository.**

2. Merge Updates into Your Local Branch:

```sh

git checkout master
git merge upstream/master
```

This merges the fetched changes from upstream into your local master branch.

3. Push Changes to Your Fork:

```sh

git push origin master
```
**This updates your fork on GitHub with the changes you’ve merged locally.**