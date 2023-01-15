{ pkgs }: {
	deps = [
		pkgs.busybox
  pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.nodePackages.vls
        pkgs.yarn
        pkgs.replitPackages.jest
	];
}