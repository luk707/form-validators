export const navbar = state => state.navbar;

export const navbarIsOpen = state => navbar(state).open;

export const releases = state => state.releases.releases;

export const loadingReleases = state => state.releases.loading;

export const selectedRelease = state => state.selectedRelease.path;
