const { getLatestChanges } = require('../lib/changelog')

describe('versions', () => {
  it('its content is empty, when no changelog entry is present', () => {
    const input = './test/fixtures/changelog/EMPTY.md'
    const output = getLatestChanges(input)

    expect(output).toEqual('')
  })

  it('its content contains a single entry, when a single changelog entry is present', () => {
    const input = './test/fixtures/changelog/ONE_ENTRY.md'
    const expected = `## [Unreleased](https://github.com/patrickjahns/chlgr/tree/HEAD)

[Full Changelog](https://github.com/patrickjahns/chlgr/compare/5b4d23800d1cb02fe216494652dbb17fda4d4545...HEAD)

**Implemented enhancements:**

- added feature 2 (https://github.com/patrickjahns/chlgr/pull/6) ([patrickjahns](https://github.com/patrickjahns))
- added feature 1 [#4](https://github.com/patrickjahns/chlgr/pull/4) ([patrickjahns](https://github.com/patrickjahns))

**Fixed bugs:**
- second bug [#3](https://github.com/patrickjahns/chlgr/pull/3) ([patrickjahns](https://github.com/patrickjahns))
- first bug [#2](https://github.com/patrickjahns/chlgr/pull/2) ([patrickjahns](https://github.com/patrickjahns))



\\* *This Changelog was automatically generated by [github_changelog_generator](https://github.com/github-changelog-generator/github-changelog-generator)`
    const output = getLatestChanges(input)
    expect(output).toEqual(expected)
  })

  it('its content contains a single entry, when two or more changelog entries are present', () => {
    const input = './test/fixtures/changelog/TWO_ENTRY.md'
    const expected = `## [Unreleased](https://github.com/patrickjahns/chlgr/tree/HEAD)

[Full Changelog](https://github.com/patrickjahns/chlgr/compare/v1.0.0...HEAD)

**Implemented enhancements:**

- added feature 3 (https://github.com/patrickjahns/chlgr/pull/8) ([patrickjahns](https://github.com/patrickjahns))

**Fixed bugs:**
- third bug [#7](https://github.com/patrickjahns/chlgr/pull/7) ([patrickjahns](https://github.com/patrickjahns))

`
    const output = getLatestChanges(input)
    expect(output).toEqual(expected)
  })

  it('its content contains a single entry, when three changelog entries are present', () => {
    const input = './test/fixtures/changelog/THREE_ENTRY.md'
    const expected = `## [Unreleased](https://github.com/patrickjahns/chlgr/tree/HEAD)

[Full Changelog](https://github.com/patrickjahns/chlgr/compare/v1.1.0...HEAD)

**Implemented enhancements:**

- added feature 4 (https://github.com/patrickjahns/chlgr/pull/9) ([patrickjahns](https://github.com/patrickjahns))

**Fixed bugs:**
- fourth bug [#7](https://github.com/patrickjahns/chlgr/pull/10) ([patrickjahns](https://github.com/patrickjahns))

`
    const output = getLatestChanges(input)
    expect(output).toEqual(expected)
  })
})
