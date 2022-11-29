build:
	docker build . -t finex.io/public-site:latest

release: build
	docker tag finex.io/public-site:latest registry.gitlab.com/finex.io/public-site:1.1.0
	docker tag finex.io/public-site:latest registry.gitlab.com/finex.io/public-site:latest

publish: release
	docker push registry.gitlab.com/finex.io/public-site:1.1.0
	docker push registry.gitlab.com/finex.io/public-site:latest
