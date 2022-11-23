build:
	docker build . -t finex.io/public-site:latest

release: build
	docker tag finex.io/public-site:latest registry.gitlab.com/finex.io/public-site:latest
	docker tag finex.io/public-site:latest registry.gitlab.com/finex.io/public-site:1.0.0

publish: release
	docker push registry.gitlab.com/finex.io/public-site:latest
	docker push registry.gitlab.com/finex.io/public-site:1.0.0
