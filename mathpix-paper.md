Single Sideband

$$
\begin{align*}
m(t)= & f(t)+i \hat{f}(t) \\
s(t)= & {\left[f(t) \cos \omega_{0} t-\hat{f}(t) \sin \omega_{0} t\right] } \\
& +i\left[f(t) \sin \omega_{0} t+\hat{f}(t) \cos \omega_{0} t\right]  \tag{5}\\
|s(t)|= & {\left[f^{2}(t)+\hat{f}^{2}(t)\right]^{1 / 2}, \quad \omega_{0}>0 }
\end{align*}
$$

That Eq. (5) represents a SSB amplitude-modulated signal is easily shown by noting that cos at and sin at are a Hilbert pair, so the Fourier series representations of $f(t)$ and $\hat{f}(t)$ are

$$
f(t)=\sum_{n=0}^{\infty} c_{n} \cos \left(\omega_{n} t+\varphi_{n}\right) ; \quad \hat{f}(t)=\sum_{n=0}^{\infty} c_{n} \sin \left(\omega_{n} t+\varphi_{n}\right)
$$

Thus, Eq. (5) can be written

$$
s(t)=\sum_{n=0}^{\infty} c_{n} \cos \left[\left(\omega_{n}+\omega_{0}\right) t+\varphi_{n}\right]+i \sum_{n=0}^{\infty} c_{n} \sin \left[\left(\omega_{n}+\omega_{0}\right) t+\varphi_{n}\right]
$$

where the simple translation of all frequency components by an amount $\omega_{0}$ is apparent. The representation is analytic for all values of $\omega_{0}>0$ and only coherent detection can recover $f(t)$ exactly.

## EXPONEINTIAL (PHASE) MODULATION

## Double Sideband

$$
\begin{align*}
m(t) & =e^{i f(t)} \\
s(t) & =\cos \left[\omega_{0} t+f(t)\right]+i \sin \left[\omega_{0} t+f(t)\right]  \tag{6}\\
|s(t)| & =1, \quad \omega_{0} \gg \Omega_{\max }
\end{align*}
$$

The conventional representation of phase modulation is apperent in Eq. (6); it is designated as DSB to emphasize that the spectrum is twosided about $\omega_{0}$. Even if the modulating signal $f(t)$ is band-limited, the exponential operation used in generating $m(t)$ assures that it will have a spectrum of infinite extent in both positive and negative directions. Shifting the center frequency to $\omega_{0}$ cannot, therefore, produce a spectrum containing only positive frequencies so, as noted also by Dugundji, ${ }^{(11)}$ the representation is not analytic. In a practical sense, of course, it is known that the spectrum falls off rapidly beyond some frequency. Thus, the representation can be taken approximately to be analytic if the center frequency is high compared with the highest significant frequency component $\delta_{\text {max }}$ in $m(t)$.

## Single Sideband

$$
\begin{align*}
m(t) & =e^{i[f(t)+i \hat{f}(t)]} \\
s(t) & =e^{-\hat{f}(t)} \cos \left[\omega_{0} t+f(t)\right]+i e^{-\hat{f}(t)} \sin \left[\omega_{0} t+f(t)\right]  \tag{7}\\
|s(t)| & =e^{-\hat{f}(t)}, \quad \omega_{0}>0
\end{align*}
$$

The modulated signal given by Eq. (7) appears to be novel. Since the modulation function is now analytic, it contains no negative frequencies (though the spectrum still extends infinitely in the positive direction). Thus, $s(t)$ is analytic for all values of $\omega_{0}>0$.

By analogy with Eq. (5), the modulated signal given by Eq. (7) represents a SSB version of phase modulation since it contains no frequency components below $\omega_{0}$. The implication is that, though the instantaneous frequency

$$
\omega_{\text {inst }} \equiv \frac{d e p}{d t}=\omega_{0}+\dot{f}(t)
$$

has the same excursions for both Ens. (6) and (7), the multiplicative factor $e^{-\hat{f}(t)}$ causes the lower sideband to disappear in Eq. (7). To demonstrate that this is indeed the case and, also, to gain insight as to the effect on the upper sideband, consider frequency modulation by the single sinusoid

$$
\dot{f}(t)=\Omega \cos \omega t
$$

where $\Omega$ is the peak frequency deviation. The phase function and its Hilbert transform become

$$
f(t)=\frac{\Omega}{\omega} \sin \omega t, \quad \hat{f}(t)=-\frac{\Omega}{\omega} \cos \omega t
$$

where $\Omega / \omega$ is the deviation ratio or modulation index.
The modulation function in Eq. (7) becomes

$$
m(t)=e^{i[f(t)+i \hat{f}(t)]}=\exp \left[\frac{\Omega}{\omega} e^{i \omega t}\right]=\sum_{k=0}^{\infty} \frac{1}{k!}\left(\frac{\Omega}{\omega}\right)^{k} e^{i k \omega t}
$$

yielding the analytic modulated signal

$$
m(t) e^{i \omega_{0} t}=\sum_{k=0}^{\infty} \frac{1}{k!}\left(\frac{\Omega}{\omega}\right)^{k} e^{i\left(\omega_{0}+k \omega\right) t}
$$

The actual modulated signal may be taken as the real part or

$$
\begin{equation*}
e^{-f(t)} \cos \left[\omega_{0} t+f(t)\right]=\sum_{k=0}^{\infty} \frac{1}{k!}\left(\frac{\Omega}{\omega}\right)^{k} \cos \left(\omega_{0}+k \omega\right) t \tag{8}
\end{equation*}
$$

from which the one-sided nature of the spectrum is clear.* The meansquare value of the amplitude factor is $I_{0}\left(\frac{2 \Omega}{\omega}\right)$ so the ratio of peak-toaverage power over the modulation cycle becomes

$$
e^{2 \Omega} / I_{0}\left(\frac{2}{\omega}\right)
$$

A conventional frequency-modulated (FM) signal using the same modulating signal has the familiar expansion

$$
\begin{equation*}
\cos \left[\omega_{0} t+f(t)\right]=\sum_{k=-\infty}^{\infty} J_{k}\left(\frac{\Omega}{\omega}\right) \cos \left(\omega_{0}+k \omega\right) t \tag{9}
\end{equation*}
$$

[^0]The line spectra of Eqs. (8) and (9) are plotted in Fig. 2 for several deviation ratios. The component magnitudes have been adjusted so that the spectra represent signals of equal average power. Generally speaking, the cancellation of the lower sideband is accompanied by an extension of the upper sideband. Nevertheless, the "width" of the onesided spectra appear reduced by roughly one-third.

The one-sided signal can be generated from a conventional phasemodulated signal by forming the Hilbert transform (by means, say, of a $\pi / 2$ phase shifter) and amplitude modulating with the exponential; limiting in the receiver will then restore the lower sidebend and permit the use of a conventional discriminator. However, the new threshold behavior is not clear.

## EXPONENTIAL (ENVELOPE) MODULATION

## Double Sideband

$$
\begin{align*}
m(t) & =e^{g(t)}, g(t)=\alpha \log f(t), f(t)>0 \\
s(t) & =f^{\alpha}(t) \cos \omega_{0} t+i f^{\alpha}(t) \sin \omega_{0} t  \tag{10}\\
|s(t)| & =f^{\alpha}(t), \omega_{0} \gg S_{\max }
\end{align*}
$$

The intermediate function $g(t)$ is introduced in order to produce the desired modulated effects in Eq. (11). The difference between Eq. (4) and Eq. (10) is obviously trivial and the latter has been included mainly for completeness; they are, of course, identical for $\alpha=1$.

Single Sideband

$$
\begin{align*}
m(t)= & e^{[g(t)+i \hat{g}(t)]}, g(t)=\alpha \log f(t), f(t)>0 \\
s(t)= & f^{\alpha}(t) \cos \left[\omega_{0} t+\alpha \widehat{\log f(t)}\right] \\
& +i f^{\alpha}(t) \sin \left[\omega_{0} t+\alpha \widehat{\log f(t)}\right]  \tag{11}\\
|s(t)|= & f^{\alpha}(t), \omega_{0}>0
\end{align*}
$$

The SSB version given by Eq. (11) is related to Eq. (7), from which it can be derived by considering the logarithm of the modulating signal. The reason these two classes of exponential modulation have been mede distinct here is that Bqs. (6) and (7) contain the modulating signal in the phase of the modulated signal, while Bqs. (10) and (11) contain the modulating signal in the envelope; hence, the designations.

The exponent $\alpha$ is important because of the relationship which the choice of its value as either 1 or $1 / 2$ bears on the question of compatible SSB modulation. Powers ${ }^{(2)}$ considers the case $\alpha=1 / 2$ so that the modulating signal is contained in the square of the envelope, thus requiring a square-law envelope detector for distortionless reproduction. Since it is this case which produces a modulated signal having the same spectral width as a conventional SSB signal, he concludes that true compatibility (i.e., a system usable with a linear envelope detector) is impossible.

Lyannoy ${ }^{(4)}$ reaches the same conclusion and, incidentally, labels the case Optimal Amplitude and Phase Modulation (OAPM) for Square-Law Detection. He also considers $\alpha=1$ or OAPM for Linear Detection and points


[^0]:    *It would be difficult to find a more striking example of the mathematical simplicity afforded by the use of the analytic signal than that demonstrated by the development leading to the Fourier series expansion given by Eq. (8). The conventional approach is to multiply the Fourier series expansion $e^{-\hat{f}(t)}=\sum_{n=-\infty}^{\infty} I_{n}\left(\frac{\Omega}{\omega}\right)$ cos not by that for
    $\cos \left[\omega_{0} t+f(t)\right]$ given by Eq. (9) and then reduce the double summation; needless to say, the procedure is quite tedious.

