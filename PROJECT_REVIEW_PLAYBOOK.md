# Project Review Playbook

Use this playbook to assess an unfamiliar or evolving codebase, identify meaningful cleanup, and turn evidence into a safe implementation roadmap. The goal is not maximum change or cosmetic consistency. The goal is greater confidence in correctness, security, maintainability, and operations with the least necessary churn.

## How to Use This Playbook

Run the review in two distinct modes:

1. **Read-only review:** map, inspect, validate, and report without changing source code or configuration.
2. **Approved implementation:** address agreed findings in small, independently verifiable blocks.

Do not begin implementation merely because a problem was discovered. Finish the findings report, agree on priorities, and define verification criteria first.

For a small project, combine sections where sensible. For a large project, review one bounded subsystem at a time and maintain a shared risk register.

## Review Principles

- Understand behavior before proposing structural changes.
- Prioritize user impact, security, privacy, data integrity, and operational risk.
- Trace critical flows end to end; do not review important files in isolation.
- Separate evidence from inference and confirmed defects from potential risks.
- Support every actionable finding with concrete evidence and file or symbol references.
- Treat generated output, third-party code, and intentional exceptions differently from maintained source.
- Prefer focused improvements over broad rewrites.
- Preserve behavior unless a behavior change is explicitly approved.
- Define tests, migration needs, and rollback boundaries before implementation.
- Record uncertainty rather than presenting assumptions as facts.

## 0. Define the Review

Before inspecting the code, record:

- **Objective:** why the review is happening and what decision it should support.
- **Scope:** repositories, applications, services, branches, and environments included.
- **Exclusions:** generated files, vendor code, archived modules, or deferred systems.
- **Critical flows:** authentication, payments, data mutation, administration, uploads, and other product-specific paths.
- **Constraints:** deadlines, compatibility requirements, compliance needs, and prohibited changes.
- **Validation authority:** whether commands may be run and whether they may access networks, databases, or external services.
- **Success criteria:** what a useful review must establish.

### Stop Conditions

Pause and request direction if:

- The requested action could modify production or shared external state.
- Secrets, credentials, or personal data are exposed unexpectedly.
- The working tree changes during the review in a way that conflicts with the task.
- Safe validation requires unavailable access or a destructive operation.
- The observed architecture differs enough from the stated scope to change the review materially.

## 1. Map the System

- Identify applications, packages, libraries, services, and shared modules.
- Locate entry points, routes, workers, queues, webhooks, and scheduled tasks.
- Identify database access layers, schemas, migrations, caches, and storage.
- Map external APIs, identity providers, payment systems, messaging, and analytics.
- Locate build, deployment, infrastructure, and environment configuration.
- Separate maintained source from generated, vendored, cached, fixture, and build output.
- Trace critical user and data flows across trust boundaries.
- Identify owners and authoritative sources for important business rules.

### Deliverable

A concise system map containing:

- Components and their responsibilities.
- Data stores and external dependencies.
- Trust boundaries and privileged operations.
- Critical flows and their entry points.
- Areas intentionally excluded from review.

## 2. Establish a Reproducible Baseline

- Record branch, revision, and working-tree state before changes.
- Review dependency manifests, lockfiles, scripts, and runtime requirements.
- Identify required environment variables without exposing values.
- Review formatter, linter, type checker, tests, build, and security tooling.
- Run only authorized validation commands and preserve their exact results.
- Distinguish source defects from environment, dependency, fixture, or configuration failures.
- Note missing, contradictory, or stale documentation.
- Record tool versions when they can affect results.

### Baseline Template

```markdown
## Baseline

- Revision:
- Runtime and package manager:
- Environment assumptions:
- Working-tree state:
- Validation commands:
- Passing checks:
- Pre-existing failures:
- Checks not run and why:
```

## 3. Review Architecture and Domain Boundaries

- Check whether modules have clear responsibilities and ownership.
- Identify duplicated business logic and competing sources of truth.
- Find tight coupling, circular dependencies, hidden side effects, and unstable interfaces.
- Review oversized files, functions, classes, components, and service objects.
- Identify domain logic embedded in transport, persistence, or presentation layers.
- Check whether dependency direction matches the intended architecture.
- Review client, server, database, job, and external-service boundaries.
- Challenge abstractions that add indirection without reducing duplication or risk.
- Look for obsolete architecture retained after product requirements changed.

### Architecture Questions

- Can a developer quickly locate the owner of a behavior?
- Is each important rule enforced in one authoritative place?
- Can a module change without causing unrelated breakage?
- Are side effects explicit and observable?
- Do public interfaces hide implementation details without hiding important behavior?
- Does the architecture represent the current product rather than its history?

## 4. Audit Correctness, Security, and Privacy

Review critical paths before style or general cleanup. Follow each path from untrusted input through authorization, state changes, persistence, and output.

### Authentication and Authorization

- Verify authentication at every protected boundary.
- Verify authorization independently of navigation or UI visibility.
- Check role, ownership, tenant, and object-level access rules.
- Look for privilege escalation and insecure direct object references.
- Review session creation, renewal, revocation, token storage, and logout.
- Confirm privileged server operations cannot be invoked with client-only checks.

### Input, Output, and Data Safety

- Validate and normalize untrusted input at system boundaries.
- Review queries and commands for injection and unsafe dynamic construction.
- Check mass assignment, over-posting, unsafe deserialization, and unintended field exposure.
- Verify context-appropriate output encoding and cross-site scripting protections.
- Review uploads for type, size, content, storage, malware, and access-control risks.
- Confirm errors do not reveal secrets, internals, or personal data.

### Secrets and External Integrations

- Ensure secrets are not committed, logged, bundled, or exposed to clients.
- Verify webhook signatures, replay protection, and idempotency.
- Treat client-provided prices, roles, ownership, and status values as untrusted.
- Review API timeouts, retries, rate limits, circuit breaking, and fallback behavior.
- Confirm test and development integrations cannot accidentally target production.

### State, Concurrency, and Reliability

- Look for race conditions and non-atomic multi-step updates.
- Check idempotency for payments, webhooks, jobs, and retryable operations.
- Review transaction boundaries, compensation, and partial-failure behavior.
- Verify date, time-zone, currency, units, and numeric precision handling.
- Test null, empty, duplicate, stale, malformed, and out-of-order data.
- Check retry behavior for duplicate side effects and retry storms.

### Privacy and Data Lifecycle

- Identify personal, sensitive, regulated, and security-relevant data.
- Check collection, consent, minimization, retention, deletion, and export behavior.
- Review access logs, analytics, backups, caches, and error reports for data leakage.
- Verify authorization remains correct in background jobs and administrative tools.
- Confirm sensitive data is protected in transit and at rest where required.

## 5. Review Backend, API, and Persistence Behavior

- Verify API contracts, status codes, error shapes, pagination, and versioning.
- Check request limits, rate limiting, cancellation, and timeout propagation.
- Review transactions, constraints, indexes, query patterns, and connection handling.
- Detect N+1 queries, unbounded reads, unsafe full-table operations, and lock contention.
- Ensure database constraints enforce invariants that must survive application bugs.
- Review migrations for ordering, compatibility, reversibility, and large-table impact.
- Check queues and jobs for acknowledgement, retries, poison messages, and observability.
- Verify cache keys, invalidation, consistency expectations, and tenant isolation.

## 6. Review Frontend and User Experience

Apply this section when the project has a user interface.

- Review component boundaries and repeated interface patterns.
- Check whether state is owned at the appropriate level.
- Review effects and subscriptions for stale state, races, leaks, and missing cleanup.
- Verify loading, empty, error, success, offline, and disabled states.
- Check keyboard navigation, focus, labels, semantics, contrast, and motion preferences.
- Review responsiveness, localization, text expansion, and reduced viewport behavior.
- Look for unnecessary rendering, oversized bundles, and avoidable requests.
- Check client/server boundaries and exposure of server-only data.
- Verify forms preserve input, prevent duplicate submission, and explain failures.
- Check optimistic updates and rollback behavior when requests fail.

## 7. Assess Maintainability and Dependencies

- Find dead code, unused exports, obsolete feature paths, and stale configuration.
- Identify duplicated logic, markup, validation, queries, and constants.
- Review naming and domain terminology for consistency and precision.
- Check type safety, unsafe casts, ignored errors, and overly broad types.
- Identify scattered configuration and unexplained magic values.
- Review error handling and logging for consistency and actionable context.
- Find comments and documentation that no longer match behavior.
- Review dependency necessity, maintenance status, licensing, and compatibility.
- Identify unsupported runtimes, vulnerable packages, and abandoned integrations.
- Confirm automation and generated-code workflows are documented and reproducible.

### Cleanup Classification

- **Required:** resolves a defect, vulnerability, data risk, or material operational hazard.
- **High-value:** substantially reduces complexity or future defect probability.
- **Opportunistic:** worthwhile when approved work already touches the area.
- **Cosmetic:** low-impact consistency work that must not displace higher priorities.
- **Do not change:** unusual code with a valid constraint or unacceptable migration risk.

## 8. Evaluate Tests and Operations

### Tests

- Map unit, integration, contract, end-to-end, migration, and smoke-test coverage.
- Prioritize behavior around authorization, payments, data mutation, and recovery.
- Check failure paths, boundary cases, concurrency, retries, and idempotency.
- Identify brittle tests coupled to implementation details or shared state.
- Confirm tests are deterministic, isolated, and runnable in documented environments.
- Look for tests that pass without asserting the intended outcome.
- Verify critical integrations are covered by contract tests or realistic test doubles.

### Performance

- Identify latency-sensitive and resource-intensive paths.
- Look for unbounded work, repeated I/O, memory growth, and blocking operations.
- Review database, network, bundle, rendering, and startup costs as applicable.
- Require measurements before recommending performance-specific complexity.

### Operations

- Review build and deployment reproducibility.
- Check migration sequencing, compatibility windows, and rollback expectations.
- Review health checks, structured logs, metrics, tracing, dashboards, and alerts.
- Verify backup, restore, disaster recovery, and data-reconciliation assumptions.
- Review runtime limits, graceful shutdown, retries, and dependency failures.
- Check release, rollback, feature-flag, and security-update processes.
- Verify operational documentation covers common failures and recovery steps.

## 9. Record and Rank Findings

Rank findings by impact, likelihood, reach, and recoverability. Do not inflate severity because a fix is easy or a pattern is undesirable.

### Severity

1. **Critical:** credible risk of active exploitation, severe data loss, or system-wide outage requiring immediate action.
2. **High:** likely security, correctness, privacy, or reliability failure with material impact.
3. **Medium:** meaningful edge-case, operational, or maintainability risk that should be scheduled.
4. **Low:** localized improvement with limited immediate impact.

### Confidence

- **Confirmed:** reproduced or directly proven from reachable code and configuration.
- **High:** strongly supported but not reproduced in the available environment.
- **Medium:** plausible and consequential, but dependent on an unverified assumption.
- **Low:** requires further investigation and should not yet drive implementation.

### Finding Template

```markdown
### [Severity] Specific finding title

- Category:
- Confidence:
- Location:
- Evidence:
- Trigger or reproduction:
- Impact:
- Root cause:
- Recommendation:
- Verification:
- Migration or rollback concerns:
```

Keep confirmed defects, vulnerabilities, regression risks, architectural concerns, missing safeguards, and optional cleanup distinguishable in the report.

## 10. Build the Roadmap

Prioritize dependencies and risk reduction, not file order.

### Phase 0: Containment

- Revoke exposed credentials, disable unsafe paths, preserve evidence, or add temporary controls when immediate risk exists.

### Phase 1: Correctness, Security, and Data Integrity

- Address exploitable vulnerabilities and broken critical flows.
- Fix unsafe failure behavior, authorization gaps, and state corruption risks.
- Add focused regression tests around every fix.

### Phase 2: Structural Risk Reduction

- Consolidate business rules and competing sources of truth.
- Clarify boundaries, dependency direction, types, errors, and interfaces.
- Split oversized modules only where responsibilities are genuinely distinct.

### Phase 3: Maintenance and Operations

- Remove verified dead code and unnecessary dependencies.
- Improve documentation, automation, tests, observability, and recovery procedures.
- Resolve approved low-risk consistency issues.

For every roadmap item, record owner, dependencies, effort range, risk, acceptance criteria, and deferral rationale where applicable.

## 11. Implement Safely

For every approved implementation block:

1. State the finding and exact intended outcome.
2. Define behavior that must remain unchanged.
3. Record relevant baseline checks and acceptance criteria.
4. Make one coherent, reviewable change.
5. Add or update focused tests.
6. Run targeted validation, then the appropriate full-project checks.
7. Review the diff for accidental scope expansion and sensitive data.
8. Verify migrations, compatibility, deployment order, and rollback where relevant.
9. Record results, residual risk, and follow-up work.

Do not combine unrelated cleanup merely because the same files are open. Small, purpose-driven changes make regressions easier to identify, review, deploy, and roll back.

## Review Completion Checklist

- [ ] Objective, scope, exclusions, constraints, and critical flows are recorded.
- [ ] The system map identifies trust boundaries and authoritative data sources.
- [ ] The reproducible baseline and pre-existing failures are documented.
- [ ] Critical flows were traced end to end.
- [ ] Correctness, security, privacy, and data integrity were reviewed first.
- [ ] Backend, frontend, persistence, dependencies, tests, and operations were reviewed where applicable.
- [ ] Findings include evidence, impact, confidence, and precise locations.
- [ ] Confirmed defects are distinguishable from risks and optional cleanup.
- [ ] Unperformed checks and unresolved assumptions are disclosed.
- [ ] The roadmap respects dependencies and separates containment from cleanup.
- [ ] Every approved change has acceptance, verification, migration, and rollback criteria.
- [ ] Deferred work has an owner or explicit rationale and priority.

## Guiding Standard

A successful review does not produce the longest list of changes. It produces a trustworthy model of the system, identifies the smallest set of well-supported improvements that most increases confidence, and provides a safe, measurable path to implement them.
