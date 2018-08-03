LINT := ./bin/replicated-lint
PROJECT ?= replicated-entitlements

project-import:
	rm -rf src/projects/$(PROJECT)
	mkdir -p src/projects/$(PROJECT)
	node -e "var yaml = require('js-yaml'); var fs = require('fs'); fs.writeFileSync('src/projects/$(PROJECT)/rules.ts', '// THIS FILE IS AUTOGENERATED\n// tslint:disable\nimport { YAMLRule } from \"../../lint\";\nconst rules: YAMLRule[] = ' + JSON.stringify(yaml.safeLoad(fs.readFileSync('projects/$(PROJECT)/rules.yaml').toString())) + ';\nexport default rules;\n')"
	node -e "var yaml = require('js-yaml'); var fs = require('fs'); fs.writeFileSync('src/projects/$(PROJECT)/schema.ts', '// THIS FILE IS AUTOGENERATED\n// tslint:disable\nimport { JSONSchema4 } from \"json-schema\";\nconst schema: JSONSchema4 = ' + JSON.stringify(yaml.safeLoad(fs.readFileSync('projects/$(PROJECT)/schema.json').toString())) + ';\nexport default schema;\n')"
	node -e "var fs = require('fs'); fs.writeFileSync('src/projects/$(PROJECT)/index.ts', '// THIS FILE IS AUTOGENERATED\n// tslint:disable\nimport rules from \'./rules\'; import schema from \'./schema\'; export { rules, schema };\n')"

project-verify-rules:
	$(LINT) verify-rules --rules projects/$(PROJECT)/rules.yaml

project-generate-docs:
	$(LINT) docs gen --excludeDefaults --extraRules projects/$(PROJECT)/rules.yaml > ./projects/$(PROJECT)/docs-generated.md

project-validate-spec-good:
	$(LINT) validate --infile projects/$(PROJECT)/spec-good.yaml --excludeDefaults --threshold warn --schema projects/$(PROJECT)/schema.json --extraRules projects/$(PROJECT)/rules.yaml

project-validate-spec-bad:
	$(LINT) validate --infile projects/$(PROJECT)/spec-bad.yaml  --excludeDefaults --threshold warn --schema projects/$(PROJECT)/schema.json --extraRules projects/$(PROJECT)/rules.yaml

all: project-import project-verify-rules project-generate-docs project-validate-spec-good project-validate-spec-bad
