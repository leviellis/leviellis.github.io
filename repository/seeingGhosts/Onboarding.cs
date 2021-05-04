using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Onboarding : MonoBehaviour
{
    bool tutorial = true;

    public GameObject onboardingCanvas;
    public GameObject startButton;
    public GameObject gameCanvas;
    public GameObject tutorialCanvas;

    public GameObject ghostManager;

    private void Start()
    {
        
    }

    public void OnbardingTextUpdate()
    {
        startButton.GetComponent<Button>().interactable = false;

        this.GetComponent<GhostsLeft>().startedGame = true;

        onboardingCanvas.SetActive(false);
        tutorialCanvas.SetActive(false);
        gameCanvas.SetActive(true);

        ghostManager.SetActive(true);
    }

    public void TutorialToggle()
    {
        if (tutorial)
        {
            tutorialCanvas.SetActive(true);
            tutorial = false;
        }

        else
        {
            tutorialCanvas.SetActive(false);
            tutorial = true;
        }
    }
}
