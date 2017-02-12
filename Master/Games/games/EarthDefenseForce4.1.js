Game.Options = [
    new Nucleus.GameOption(
        "Keyboard Player",
        "The player that will be playing on keyboard and mouse (if any)",
        Nucleus.KeyboardPlayer.NoKeyboardPlayer,
        "KeyboardPlayer"),
    new Nucleus.GameOption(
        "Save ID - Player 1",
        "Save ID to use for Player 1 (default 0)",
        0,
        "saveid0"),
    new Nucleus.GameOption(
        "Save ID - Player 2",
        "Save ID to use for Player 2 (default 1)",
        1,
        "saveid1"),
    new Nucleus.GameOption(
        "Save ID - Player 3",
        "Save ID to use for Player 3 (default 2)",
        2,
        "saveid2"),
    new Nucleus.GameOption(
        "Save ID - Player 4",
        "Save ID to use for Player 4 (default 3)",
        3,
        "saveid3")
];
Game.KillMutex = [ // 2nd instance won't launch with these removed
];


Game.BinariesFolder = "";
Game.RootGameFolderPath = "";
Game.XInputFolder = "";
Game.ExecutablePath = "";

Game.Debug = true;
Game.SymlinkExe = false;
Game.SupportsKeyboard = true;
Game.ExecutableName = "edf41.exe";
Game.SteamID = "410320";
Game.GUID = "410320";
Game.GameName = "EARTH DEFENSE FORCE 4.1 The Shadow of New Despair";
Game.MaxPlayers = 4;
Game.MaxPlayersOneMonitor = 4;
Game.NeedsSteamEmulation = true;
Game.LauncherTitle = "";
Game.SaveType = null;//Nucleus.SaveType.CFG;
Game.SupportsPositioning = true;
Game.HideTaskbar = false;
Game.CustomXinput = true;
//Game.StartArguments = "-novid";

Game.Play = function () {
    /*
    var isFullscreen = Context.IsFullscreen ? 1 : 0;

    Context.ModifySave = [
        new Nucleus.CfgSaveInfo("VideoConfig", "setting.fullscreen", isFullscreen),
        new Nucleus.CfgSaveInfo("VideoConfig", "setting.defaultres", Context.Width),
        new Nucleus.CfgSaveInfo("VideoConfig", "setting.defaultresheight", Context.Height),
    ];

    Context.SavePath = Context.GetFolder(Nucleus.Folder.GameFolder) + "\\left4dead2\\cfg\\video.txt";
    */
}