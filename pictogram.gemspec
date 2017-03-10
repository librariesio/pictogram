# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'pictogram/version'

Gem::Specification.new do |spec|
  spec.name          = "pictogram"
  spec.version       = Pictogram::VERSION
  spec.authors       = ["Oli Evans", "Andrew Nesbitt"]
  spec.email         = ["andrewnez@gmail.com"]

  spec.summary       = "Mapping human concepts to pictures."
  spec.homepage      = "https://github.com/librariesio/pictogram"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.require_paths = ["lib"]

  spec.add_dependency "railties"

  spec.add_development_dependency "bundler", "~> 1.14"
  spec.add_development_dependency "rake", "~> 12.0"
end
