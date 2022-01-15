# TS-playground

boilerplate for a Typescript API

## [Mirroring a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository#mirroring-a-repository)
- Open Terminal.
- Create a bare clone of the repository.
```
$ git clone --bare https://github.com/exampleuser/old-repository.git
```
- Mirror-push to the new repository.
```
$ cd old-repository
$ git push --mirror https://github.com/exampleuser/new-repository.git
```
- Remove the temporary local repository you created earlier.
```
$ cd ..
$ rm -rf old-repository
```
